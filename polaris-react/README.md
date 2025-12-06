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

### Installation

Run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @shopify/polaris --save
```

If you prefer [Yarn](https://yarnpkg.com/en/), use the following command instead:

```bash
yarn add @shopify/polaris
```

### Usage

1.  Import the CSS directly into your project if your asset packager supports it:

```js
import '@shopify/polaris/build/esm/styles.css';
```

Otherwise include the CSS in your HTML. We suggest copying the latest [styles file](https://unpkg.com/@shopify/polaris@latest/build/esm/styles.css) into your own project. This will need to be updated with future releases.

```html
<link rel="stylesheet" href="styles.css" />
```

2.  Include the translations and any of the provided components in your project:

```js
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Page, LegacyCard, Button} from '@shopify/polaris';
```

3.  Tell React to render the element in the DOM:

```js
ReactDOM.render(
  <AppProvider i18n={enTranslations}>
    <Page title="Example app">
      <LegacyCard sectioned>
        <Button onClick={() => alert('Button clicked!')}>Example button</Button>
      </LegacyCard>
    </Page>
  </AppProvider>,
  document.querySelector('#app'),
);
```

4. Load the web font [Inter](https://github.com/rsms/inter).

```html
<link rel="preconnect" href="https://cdn.shopify.com/" />
<link
  rel="stylesheet"
  href="https://cdn.shopify.com/static/fonts/inter/v4/styles.css"
/>
```

## Using the CSS components

If React doesn’t make sense for your application, you can use a CSS-only version of our components. This includes all the styles you need for every component in the library, but you’ll be responsible for writing the correct markup and updating classes and DOM attributes in response to user events.

### Usage

1. Include the CSS in your HTML. We suggest copying the latest [styles file](https://unpkg.com/@shopify/polaris@latest/build/esm/styles.css) into your own project. This will need to be updated with future releases.

```html
<link rel="stylesheet" href="styles.css" />
```

2. Include the markup and associated classes in your HTML document:

```html
<button class="Polaris-Button">Example button</button>
```

## Development

We use Storybook to create a simple, hot-reloading playground for development on these components. You can edit the `playground/Playground.tsx` file to import the components you are working on, and run `yarn dev` in order to start the development server. Please do not commit your work on the playground so that it remains pristine for other developers to work on.

### Testing on mobile or a virtual machine

To test the changes on a mobile or virtual machine, you will need to open the source of the iFrame, to do this:

1.  Run `yarn dev`
1.  Make sure your virtual machine and mobile device are on the same network
1.  Open http://YOUR_IP_ADDRESS:ASSIGNED_PORT/iframe.html?path=/story/playground-playground--playground in your mobile device or virtual machine

### Testing in a consuming project

The `/snapit` GitHub comment command in pull requests will publish a snapshot NPM package for testing. Read the [release documentation](https://github.com/Shopify/polaris/blob/main/documentation/Releasing.md#snapshot-release) for more information.

#### Manual visual regression testing

To start a server for manually viewing the visual regression testing examples, run `yarn run dev`.
