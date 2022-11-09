// import React from 'react';
// import groupBy from 'lodash/groupBy';
import styles from './index.module.less';
console.log(' styles ： ', styles,  )// 
export default function ClusterMarker({
  count,
  markers = [],
  hover = false,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
}) {
  // const dataGroup = groupBy(markers, 'type');
  const dataGroup = markers;
  const contents = [];
  Object.entries(dataGroup).forEach(([key, items], index) => {
    contents.push(
      <div className={`marker-icon marker-icon-${key}`} key={index}>{items.length}</div>,
    );
  });
  console.log(' ClusterMarker ： ',    )// 
  return (
    <div
      className={`${styles.box} ${hover ? styles.hover : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* <div className={cls(styles.marker, styles.normal)}>{count}</div>
      <div className={cls(styles.marker, styles.active)}>{contents}</div> */}
      <div className={`${styles.marker} ${styles.normal}`}>
        <div className={styles.cell}>{count}</div>
      </div>
      <div className={`${styles.marker} ${styles.active}`}>
        <div className={styles.cell}>{contents}</div>
      </div>
    </div>
  );
}
