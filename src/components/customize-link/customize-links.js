'use client'

import { useDevlinksContext } from '@/context/devlink-context'
import EmptyLinkContent from './empty-link-content'
import Button from '../UI/button/button'
import LinksList from './customize-links-list'
import LinkContainerSkeleton from '../UI/loading/links-container-skeleton'
import styles from './CustomizeLinks.module.css'
const CustomizeLinks: React.FC = () => {
  const { devlinksList, addNewLink, isButtonDisabled, loading, handleSubmit } =
    useDevlinksContext()

  return (
    <>
      <div className="customize-links-container">
        <button className="add-link-button" onClick={addNewLink} disabled={loading}>
          + Add new link
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="links-list-container">
          {loading ? (
            <LinkContainerSkeleton />
          ) : devlinksList?.length > 0 ? (
            <LinksList links={devlinksList} />
          ) : (
            <EmptyLinkContent />
          )}
        </div>
        <div className="divider-container">
          <hr className="divider" />
          <div className="button-container">
            <button className="save-button" disabled={isButtonDisabled}>
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default CustomizeLinks
