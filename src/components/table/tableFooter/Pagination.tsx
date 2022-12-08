import styles from './TableFooter.module.css'

const range = (start: number, end: number): number[] => {
  return [...Array(end).keys()].map((el) => el + start)
}

const PaginationItem = ({ page, currentPage, onPageChange }: { page: number, currentPage: number, onPageChange: any }): JSX.Element => {
  return (
    <button
      className={`${styles.button} ${
            page === currentPage ? styles.activeButton : styles.inactiveButton
          }`}
      onClick={() => onPageChange(page)}
    >
      {page}
    </button>
  )
}

const Pagination = ({ currentPage, total, limit, onPageChange }: { currentPage: number, total: number, limit: number, onPageChange: any }): JSX.Element => {
  const pagesCount = Math.ceil(total / limit)
  const pages = range(1, pagesCount)
  return (
    <div className={styles.tableFooter}>
      {pages.map((page) => (
        <PaginationItem
          page={page}
          key={page}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      ))}
    </div>
  )
}
export default Pagination
