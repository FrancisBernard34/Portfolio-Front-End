import { test, expect } from "@playwright/test";

test.describe("Portfolio smoke tests", () => {
  test("home renders the hero and main sections", async ({ page }) => {
    await page.goto("/en");

    await expect(page.locator('section[aria-label="Hero section"]')).toBeVisible();
    await expect(page.getByLabel("Francis Bernard Logo")).toBeVisible();
    await expect(page.getByText("Full-Stack", { exact: true })).toBeVisible();
    await expect(page.getByText("Developer", { exact: true })).toBeVisible();
    await expect(page.getByRole("button", { name: "View projects" })).toBeVisible();

    for (const id of ["#projects", "#about", "#skills", "#contact"]) {
      await expect(page.locator(id)).toBeAttached();
    }
  });

  test("root redirects to the default locale", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveURL(/\/en$/);
  });

  test("home is available in Portuguese", async ({ page }) => {
    await page.goto("/pt-br");

    await expect(page.locator('section[aria-label="Hero section"]')).toBeVisible();
    await expect(page.getByText("Programador", { exact: true })).toBeVisible();
    await expect(page.getByText("Full-Stack", { exact: true })).toBeVisible();
  });

  test("skills page lists categories", async ({ page }) => {
    await page.goto("/en/skills");

    await expect(page.getByRole("heading", { name: "All_Skills" })).toBeVisible();
    await expect(page.getByText("Frontend", { exact: true })).toBeVisible();
    await expect(page.getByText("Backend", { exact: true })).toBeVisible();
  });

  test("login page renders the form", async ({ page }) => {
    await page.goto("/login");

    await expect(page.getByRole("heading", { name: "Login_" })).toBeVisible();
    await expect(page.getByPlaceholder("Enter your email")).toBeVisible();
    await expect(page.getByPlaceholder("Enter your password")).toBeVisible();
    await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
  });
});
