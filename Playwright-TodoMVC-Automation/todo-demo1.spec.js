import { test, expect } from '@playwright/test';

test.describe('TodoMVC App @sanity', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
  });

  test('should add multiple todos', async ({ page }) => {
    const input = page.getByTestId('text-input');

    await input.fill('Attend Class');
    await input.press('Enter');

    await input.fill('Then Go to work');
    await input.press('Enter');

    await input.fill('Got my degree');
    await input.press('Enter');

    await expect(page.getByTestId('todo-item')).toHaveCount(3);

    await expect(
      page.getByTestId('todo-item').filter({ hasText: 'Attend Class' })
    ).toBeVisible();

    await expect(
      page.getByTestId('todo-item').filter({ hasText: 'Then Go to work' })
    ).toBeVisible();

    await expect(
      page.getByTestId('todo-item').filter({ hasText: 'Got my degree' })
    ).toBeVisible();
  });

  test('should mark a todo as completed', async ({ page }) => {
    const input = page.getByTestId('text-input');

    await input.fill('Attend Class');
    await input.press('Enter');

    const todoItem = page
      .getByTestId('todo-item')
      .filter({ hasText: 'Attend Class' });

    await todoItem.getByTestId('todo-item-toggle').check();

    await expect(todoItem).toHaveClass(/completed/);
  });

  test('should show only active todos when Active filter is selected', async ({ page }) => {
    const input = page.getByTestId('text-input');

    await input.fill('Attend Class');
    await input.press('Enter');

    await input.fill('Then Go to work');
    await input.press('Enter');

    await input.fill('Got my degree');
    await input.press('Enter');

    await page
      .getByTestId('todo-item')
      .filter({ hasText: 'Attend Class' })
      .getByTestId('todo-item-toggle')
      .check();

    await page.getByRole('link', { name: 'Active' }).click();

    await expect(
      page.getByTestId('todo-item').filter({ hasText: 'Then Go to work' })
    ).toBeVisible();

    await expect(
      page.getByTestId('todo-item').filter({ hasText: 'Got my degree' })
    ).toBeVisible();

    await expect(
      page.getByTestId('todo-item').filter({ hasText: 'Attend Class' })
    ).toBeHidden();
  });

  test('should show only completed todos when Completed filter is selected', async ({ page }) => {
    const input = page.getByTestId('text-input');

    await input.fill('Attend Class');
    await input.press('Enter');

    await input.fill('Then Go to work');
    await input.press('Enter');

    await input.fill('Got my degree');
    await input.press('Enter');

    await page
      .getByTestId('todo-item')
      .filter({ hasText: 'Attend Class' })
      .getByTestId('todo-item-toggle')
      .check();

    await page.getByRole('link', { name: 'Completed' }).click();

    await expect(
      page.getByTestId('todo-item').filter({ hasText: 'Attend Class' })
    ).toBeVisible();

    await expect(
      page.getByTestId('todo-item').filter({ hasText: 'Then Go to work' })
    ).toBeHidden();

    await expect(
      page.getByTestId('todo-item').filter({ hasText: 'Got my degree' })
    ).toBeHidden();
  });

  test('should delete a todo item', async ({ page }) => {
    const input = page.getByTestId('text-input');

    await input.fill('Attend Class');
    await input.press('Enter');

    await input.fill('Then Go to work');
    await input.press('Enter');

    const todoItem = page
      .getByTestId('todo-item')
      .filter({ hasText: 'Attend Class' });

    // Hover to reveal delete button
    await todoItem.hover();

    const deleteButton = todoItem.getByTestId('todo-item-button');

    // Force click because button is hidden by CSS until hover
    await deleteButton.click({ force: true });

    await expect(
      page.getByTestId('todo-item').filter({ hasText: 'Attend Class' })
    ).toBeHidden();

    await expect(page.getByTestId('todo-item')).toHaveCount(1);
  });

  test('should clear completed todos', async ({ page }) => {
    const input = page.getByTestId('text-input');

    await input.fill('Attend Class');
    await input.press('Enter');

    await input.fill('Then Go to work');
    await input.press('Enter');

    await page
      .getByTestId('todo-item')
      .filter({ hasText: 'Attend Class' })
      .getByTestId('todo-item-toggle')
      .check();

    await page.getByRole('button', { name: 'Clear completed' }).click();

    await expect(
      page.getByTestId('todo-item').filter({ hasText: 'Attend Class' })
    ).toBeHidden();

    await expect(
      page.getByTestId('todo-item').filter({ hasText: 'Then Go to work' })
    ).toBeVisible();

    await expect(page.getByTestId('todo-item')).toHaveCount(1);
  });

});