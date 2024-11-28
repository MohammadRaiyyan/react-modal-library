# React Overlay Modal

A minimalistic, super lightweight and accessible React modal library that offers
robust type safety. This headless solution gives you full flexibility to
integrate your own content and styles without worrying about z-index or complex
configurations.

### Install

```bash
npm i react-overlay-modal
```

### Wrap the root app with `ModalProvider`

```typescript jsx
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import { ModalProvider } from "react-overlay-modal"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </StrictMode>,
)
```

### Usage

```typescript jsx

import { useModal } from "react-overlay-modal"

function ModalContent() {
  const { closeModal } = useModal()
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">✨ Welcome to Cool Modal!</h2>

      <p className="mb-4">
        This is a super awesome modal component that you can use to create
        magical user experiences. Customize it, style it, make it your own! 🚀
      </p>

      <button
        onClick={closeModal}
        className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500
                  text-white rounded-full hover:opacity-90 transform hover:scale-105
                  transition-all duration-200"
      >
        ✨ Close Modal
      </button>
    </div>
  )
}

export default function Page() {
  const { showModal } = useModal()
  return (
    <button
      className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500
                 text-white rounded-full hover:opacity-90 transform hover:scale-105
                 transition-all duration-200 font-bold"
      onClick={() => showModal({
        content: <ModalContent />,
        size: "md"
      })}
    >
      ✨ Open Cool Modal
    </button>
  )
}
```

### API

#### Props

| Property              | Type           | Default Value                            | Description                                               |
| --------------------- | -------------- | ---------------------------------------- | --------------------------------------------------------- |
| `size`                | ModalSize      | "md"                                     | Specifies the size of the modal (see `ModalSize`).        |
| `disableOutsideClick` | boolean        | false                                    | If true, disables clicking outside the modal to close it. |
| `content`             | ReactElement   | The content to display inside the modal. |
| `className`           | string         | undefined                                | Pass class to handle the overlay style.                   |
| `bodyProps`           | ModalBodyProps | undefined                                | See body props for more details (see `ModalBodyProps`)    |

#### Modal Size

| Value  | Description                    |
| ------ | ------------------------------ |
| `sm`   | Small modal size.              |
| `md`   | Medium modal size. (default)   |
| `lg`   | Large modal size.              |
| `xl`   | Extra-large modal size.        |
| `2xl`  | Double extra-large modal size. |
| `3xl`  | Triple extra-large modal size. |
| `full` | Fullscreen modal.              |

#### Modal Body Props

| Property           | Description                                                           |
| ------------------ | --------------------------------------------------------------------- |
| `className`        | Optional string for CSS class name                                    |
| `aria-labelledby`  | Optional string to reference labeling element(s)                      |
| `aria-describedby` | Optional string to reference describing element(s)                    |
| `aria-hidden`      | Optional boolean to hide from assistive tech                          |
| `aria-live`        | Optional region updates announcement: "off", "polite", or "assertive" |
| `aria-modal`       | Optional boolean indicating if element is modal                       |
| `aria-role`        | Optional string defining element's ARIA role                          |
| `tabIndex`         | Optional number for tab order                                         |
| `role`             | Optional string defining element's role                               |
| `onKeyDown`        | Optional keyboard event handler                                       |
| `onFocus`          | Optional focus event handler                                          |
| `id`               | Optional string identifier                                            |
| `style`            | Optional React CSS properties object                                  |
| `children`         | Optional React child elements                                         |
| `onClick`          | Optional mouse click event handler                                    |
