import React from 'react'
import type { FC, PropsWithChildren } from 'react'

import styles from './Table.module.scss'
import type { TableCellProps } from './TableProps'

const TableCell: FC<PropsWithChildren<TableCellProps>> = ({ children, onClick }) => {
  return (
    <td onClick={onClick} className={styles.table__cell}>
      {children}
    </td>
  )
}

export default TableCell
