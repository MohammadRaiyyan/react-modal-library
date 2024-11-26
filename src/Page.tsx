import { useModal } from "../"

function ModalNested3() {
  const { showModal, closeModal } = useModal()

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
        <button
          className="btn primary"
          onClick={() =>
            showModal({
              content: (
                <div className="test-modal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur accusantium nemo cum possimus repudiandae odio
                  distinctio reiciendis voluptas maiores officiis!
                </div>
              ),
              config: { size: "md" },
            })
          }
        >
          Opene new
        </button>
        <button className="btn secondary" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  )
}
function ModalNested2() {
  const { showModal, closeModal } = useModal()

  return (
    <div className="test-modal">
      praesentium ullam nesciunt tempore laborum animi ducimus? Omnis ad quo
      expedita reiciendis possimus libero fugiat maxime sint voluptatem ratione
      a sapiente nulla odio dolor voluptas corrupti, earum debitis beatae
      perspiciatis recusandae. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Temporibus, repellat reiciendis exercitationem cum
      laudantium corporis necessitatibus asperiores sunt? Neque, soluta.
      <br />
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat quam
      cupiditate est, labore porro commodi totam et explicabo necessitatibus
      autem praesentium officiis enim dolorem deserunt at saepe eveniet ab illo
      error. Vitae in doloribus quidem nostrum voluptate asperiores laboriosam
      omnis ducimus distinctio odio, amet fuga non molestias, architecto earum
      maiores?
      <div className="action-container">
        <button className="btn secondary" onClick={closeModal}>
          Close
        </button>
        <button
          className="btn primary"
          onClick={() =>
            showModal({ content: <ModalNested3 />, config: { size: "md" } })
          }
        >
          Opene new
        </button>
      </div>
    </div>
  )
}
function ModalContent() {
  const { showModal, closeModal } = useModal()
  return (
    <div className="test-modal">
      <div className="grid">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
          <div className="card">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            doloremque libero eveniet aspernatur, sequi impedit obcaecati ad id
            odit, veniam autem soluta iste corrupti. Harum voluptate asperiores
            sed pariatur facere.
          </div>
        ))}
      </div>
      <div className="action-container">
        <button className="btn secondary" onClick={closeModal}>
          Close
        </button>
        <button
          className="btn primary"
          onClick={() =>
            showModal({ content: <ModalNested2 />, config: { size: "xl" } })
          }
        >
          Opene new
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
              config: { size: "2xl", disableOutsideClick: true },
            })
          }}
        >
          Trigger Modal
        </button>
      </div>
    </div>
  )
}
