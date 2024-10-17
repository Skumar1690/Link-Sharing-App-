import styles from './UserProfileDetailSkeleton.module.css'; 
export default function UserProfileDetailSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.profileCard}>
        <div className={styles.profileInfo}>
          <div className={styles.skeletonLine} />
          <div className={styles.skeletonLine} />
        </div>
        <div className={styles.profileImageContainer}>
          <div className={styles.skeletonImage} />
        </div>
        <div className={styles.profileInfo}>
          <div className={styles.skeletonLine} />
          <div className={styles.skeletonLine} />
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.descriptionCard}>
          <div className={styles.descriptionLine} />
          <div className={styles.descriptionLine} />
          <div className={styles.descriptionLine} />
          <div className={styles.descriptionLine} />
          <div className={styles.hiddenContent}>
            <div className={styles.hiddenLine} />
            <div className={styles.hiddenLine} />
          </div>
          <div className={styles.hiddenContent}>
            <div className={styles.hiddenLine} />
            <div className={styles.hiddenLine} />
          </div>
          <div className={styles.hiddenContent}>
            <div className={styles.hiddenLine} />
            <div className={styles.hiddenLine} />
          </div>
        </div>
      </div>
    </div>
  );
}
