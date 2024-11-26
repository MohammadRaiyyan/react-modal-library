# React Modal Library

This React library uses stack based approach which reduces the unwanted z index
handling.

![Logo](img.png)

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
    <div className="test-modal">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt fugit
      impedit molestias blanditiis amet numquam ipsa maxime unde, dolor quo,
      iste inventore officia accusamus delectus voluptate, nulla illum earum
      debitis consectetur? Nobis corrupti quisquam libero blanditiis nemo rem
      consequuntur omnis quod velit autem, obcaecati inventore dolorem? Sunt
      tempora totam dolor.
      <br />
      <div className="action-container">
        <button className="btn secondary" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  )
}

export default function Page() {
  const { showModal } = useModal()
  return (
        <button
          className="btn primary"
          onClick={() => {
            showModal({
              content: <ModalContent />,
              config: { size: "2xl"},
            })
          }}
        >
          Trigger Modal
        </button>
  )
}
```

### API

#### Modal Size

| Value                             | Description                                        |
| --------------------------------- | -------------------------------------------------- |
| "sm"                              | Small modal size.                                  |
| "md" (default)                    | Medium modal size.                                 |
| "lg"                              | Large modal size.                                  |
| "xl"                              | Extra-large modal size.                            |
| "2xl"                             | Double extra-large modal size.                     |
| "3xl"                             | Triple extra-large modal size.                     |
| "full"                            | Fullscreen modal.                                  |
| { width: string; height: string } | Custom modal size with specified width and height. |

#### Config

| Property            | Type      | Default Value | Description                                               |
| ------------------- | --------- | ------------- | --------------------------------------------------------- |
| size                | ModalSize | "md"          | Specifies the size of the modal (see `ModalSize`).        |
| disableOutsideClick | boolean   | false         | If true, disables clicking outside the modal to close it. |

#### showModalProps

| Property | Type         | Description                                                                        |
| -------- | ------------ | ---------------------------------------------------------------------------------- |
| config   | ModalConfig  | Configuration for the modal. Defaults: `size: "md"`, `disableOutsideClick: false`. |
| content  | ReactElement | The content to display inside the modal.                                           |
