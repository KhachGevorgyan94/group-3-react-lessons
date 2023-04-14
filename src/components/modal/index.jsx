import './style.scss'

const Modal = ({closeModal, className, children}) => {
  const close = () => {
    closeModal(false)
  }

  return <div className='P-modal'>
    <div className='P-modal-bg' onClick={close}/>
    <div className={`P-modal-content ${className ? className : ''}`}>
      {children}
    </div>
  </div>
}
export default Modal