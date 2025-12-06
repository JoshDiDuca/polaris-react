# [Polaris React](https://polaris.shopify.com/)

Polaris React Remix is a component library designed to help developers create the best experience for developers who use Shopify but don't want to stick to their abhorrent design standards.

[Polaris style guide](https://polaris.shopify.com)

## Customization and Styling

### Enhanced Styling Flexibility

I've added `className` and `style` props to key Polaris components to give developers maximum control over styling and customization. 
This change will allow you to create unique, branded experiences without being constrained by the rigid polaris design system.

**Components Updated:**
- Button
- Box
- Card
- Text
- IndexTable (with contextual customization for rows, cells, and checkboxes)

**Usage Example:**
```jsx
<Button
  className="my-custom-button"
  style={{ backgroundColor: 'rebeccapurple', borderRadius: '8px' }}
>
  Custom Styled Button
</Button>
```

### A Note To Shopify - A Rant on Design Freedom vs. Standardization

Look, design should be up to whoever is creating it!

Polaris provides solid foundations - but they have been too way restrictive in letting developers arrange things their own way. I've been experimenting with Polaris for about a year now and no matter how much you stick to their standards, there's always going to be one thing you can't change, whether it be a misalignment or a bug.

**Design systems shouldn't be prisons; they should be playgrounds.**

The approach of "you can only style within our predefined variants" was stifling. Real design happens when developers can push boundaries, experiment with spacing, colours, and layouts that fit their specific use cases. Whether you're building for enterprise clients with strict brand guidelines or consumer apps that need personality, you should have the tools to make it happen. When imposing your design standard on other people, you restrict their creative ability.

This isn't about abandoning consistency - it's about enabling it on our terms.

## About this repo

The `shopify/polaris` repository is an [intergalactic](https://www.youtube.com/watch?v=qORYO0atB6g) monorepo made up of NPM packages, VSCode extensions, and websites.

```sh
polaris/
├── documentation               # Documentation for working in the monorepo
├── polaris-for-vscode          # VS Code extension for Polaris
├── polaris-icons               # Icons for Polaris
├── polaris-react               # Components for @shopify/polaris package
├── polaris-tokens              # Design tokens for Polaris
├── polaris.shopify.com         # Documentation website
└── stylelint-polaris           # Rules for custom property usage and mainline coverage
```

## Commands

### Install dependencies and build workspaces

```sh
pnpm install && pnpm build
```

### Run a command

**One workspace**

Run commands from a selected workspace using [`turbo run <command> --filter=<workspace>...`](https://turborepo.org/docs/core-concepts/filtering) flag.

| Command                                           | Runs                                 |
| ------------------------------------------------- | ------------------------------------ |
| `pnpm turbo run dev --filter=@shopify/polaris`    | Open the react component storybook   |
| `pnpm turbo run dev --filter=polaris.shopify.com` | Open polaris.shopify.com NextJS site |

**All workspaces**

Run commands across all workspaces. This uses [`turbo run <command>`](https://turborepo.org/docs/reference/command-line-reference#turbo-run-task).

| Command           | Runs                                                                                                                  |
| ----------------- | --------------------------------------------------------------------------------------------------------------------- |
| `pnpm changeset`  | Adds a new [changelog entry](https://github.com/Shopify/polaris/blob/main/.github/CONTRIBUTING.md#adding-a-changeset) |
| `pnpm lint`       | Lints all workspaces                                                                                                  |
| `pnpm test`       | Tests all workspaces                                                                                                  |
| `pnpm type-check` | Build types and check for type errors                                                                                 |
| `pnpm clean`      | Remove generated files                                                                                                |
| `pnpm format`     | Format files with prettier                                                                                            |

## Contribute to this repo

Pull requests are welcome. See the [contribution guidelines](https://github.com/Shopify/polaris/blob/main/.github/CONTRIBUTING.md) for more information.

## Licenses

Source code is under a [custom license](https://github.com/Shopify/polaris/blob/main/LICENSE.md) based on MIT. The license restricts Polaris usage to applications that integrate or interoperate with Shopify software or services, with additional restrictions for external, stand-alone applications.

All icons and images are licensed under the [Polaris Design Guidelines License Agreement](https://polaris.shopify.com/legal/license)
