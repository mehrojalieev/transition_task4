
const AdminContentHeader = ({title}: {title: string}) => {
  return (
    <div className='admin__content-header'>
      <h3 className='header-title'>{title}</h3>
    </div>
  )
}

export default AdminContentHeader
