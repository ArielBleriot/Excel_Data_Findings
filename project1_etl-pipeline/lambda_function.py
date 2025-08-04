import json
import boto3
import pandas as pd
import io
from datetime import datetime
from urllib.parse import unquote_plus  # <-- add this

def flatten(data):
    orders_data = []
    for order in data:
        for product in order['products']:
            row_orders = {
                "order_id": order["order_id"],
                "order_date": order["order_date"],
                "total_amount": order["total_amount"],
                "customer_id": order["customer"]["customer_id"],
                "customer_name": order["customer"]["name"],
                "email": order["customer"]["email"],
                "address": order["customer"]["address"],
                "product_id": product["product_id"],
                "product_name": product["name"],
                "category": product["category"],
                "price": product["price"],
                "quantity": product["quantity"]
            }
            orders_data.append(row_orders)
    df_orders = pd.DataFrame(orders_data)
    return df_orders

def lambda_handler(event, context):
    s3 = boto3.client('s3')

    # Get bucket and file name from event
    bucket_name = event['Records'][0]['s3']['bucket']['name']
    file_name_encoded = event['Records'][0]['s3']['object']['key']

    # Decode the key
    file_name = unquote_plus(file_name_encoded)

    print(f"Bucket: {bucket_name}, Key: {file_name}")  # Log for debugging

    # Get the object from S3
    response = s3.get_object(Bucket=bucket_name, Key=file_name)

    # Read and parse JSON content
    content = response['Body'].read().decode('utf-8')
    data = json.loads(content)
    df = flatten(data)

    # Convert to Parquet
    parquet_buffer = io.BytesIO()
    df.to_parquet(parquet_buffer, index=False, engine='pyarrow')

    now = datetime.now()
    timestamp = now.strftime("%Y%m%d_%H%M%S")

    # Save back to S3
    key_staging = f'orders_parquet_datalake/orders__{timestamp}.parquet'
    s3.put_object(Bucket=bucket_name, Key=key_staging, Body=parquet_buffer.getvalue())

    crawler_name = 'project1_etl_crawler'
    glue = boto3.client('glue')
    response = glue.start_crawler(Name=crawler_name)

    return {
        'statusCode': 200,
        'body': json.dumps(f'File {file_name} processed and saved as {key_staging}')
    }
