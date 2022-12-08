import styles from './Table.module.css'
import Pagination from './tableFooter/Pagination'

const Table = ({ data, limit, total, currentPage, onPageChange }: { data: any[], limit: number, total: number, currentPage: number, onPageChange: any }): JSX.Element => {
  return (
    <>
      <Pagination
        currentPage={currentPage}
        total={total}
        limit={limit}
        onPageChange={onPageChange}
      />
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>From Name</th>
            <th className={styles.tableHeader}>From Id</th>
            <th className={styles.tableHeader}>Message</th>
            <th className={styles.tableHeader}>Type</th>
            <th className={styles.tableHeader}>Created Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <tr className={styles.tableRowItems} key={el.id}>
              <td className={styles.tableCell}>{el.from_name}</td>
              <td className={styles.tableCell}>{el.from_id}</td>
              <td className={styles.tableCell}>{el.message}</td>
              <td className={styles.tableCell}>{el.type}</td>
              <td className={styles.tableCell}>{new Date(el.created_time).toUTCString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        total={total}
        limit={limit}
        onPageChange={onPageChange}
      />
    </>
  )
}

export default Table
