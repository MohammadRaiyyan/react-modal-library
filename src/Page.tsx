import { useModal } from "../"

function ModalContent3() {
  const { closeModal } = useModal()
  return (
    <div className="test-modal">
      praesentium ullam nesciunt tempore laborum animi ducimus? Omnis ad quo
      expedita reiciendis possimus libero Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Laboriosam aperiam praesentium earum ducimus hic,
      tempore ipsa dolorem iusto esse accusamus. Lorem ipsum dolor sit amet
      <br />
      <br />
      <div className="action-container">
        <button className="btn secondary" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  )
}
function ModalContent2() {
  const { closeModal, showModal } = useModal()
  return (
    <div className="test-modal">
      praesentium ullam nesciunt tempore laborum animi ducimus? Omnis ad quo
      expedita reiciendis possimus libero Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Laboriosam aperiam praesentium earum ducimus hic,
      tempore ipsa dolorem iusto esse accusamus. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Adipisci nulla soluta, doloribus nam
      expedita quia accusamus. Eaque nisi odio, repellendus dolorum excepturi
      eligendi, vel, praesentium tenetur impedit ipsa odit cum!
      <br />
      <br />
      <div className="action-container">
        <button className="btn secondary" onClick={closeModal}>
          Close
        </button>
        <button
          className="btn primary"
          onClick={() => {
            showModal({ content: <ModalContent3 />, size: "sm" })
          }}
        >
          Open New
        </button>
      </div>
    </div>
  )
}

function ModalContent() {
  const { closeModal, showModal } = useModal()
  return (
    <div className="test-modal">
      praesentium ullam nesciunt tempore laborum animi ducimus? Omnis ad quo
      expedita reiciendis possimus libero Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Laboriosam aperiam praesentium earum ducimus hic,
      tempore ipsa dolorem iusto esse accusamus. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Adipisci nulla soluta, doloribus nam
      expedita quia accusamus. Eaque nisi odio, repellendus dolorum excepturi
      eligendi, vel, praesentium tenetur impedit ipsa odit cum!
      <br />
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
        <button
          className="btn primary"
          onClick={() => {
            showModal({ content: <ModalContent2 /> })
          }}
        >
          Open New
        </button>
      </div>
    </div>
  )
}

export default function Page() {
  const { showModal } = useModal()
  return (
    <div>
      <div>
        <button
          className="btn primary"
          onClick={() => {
            showModal({
              content: <ModalContent />,
              size: "2xl",
            })
          }}
        >
          Trigger Modal
        </button>
      </div>
    </div>
  )
}
