'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useTabsItemContext } from './tabs-item'
import Link from '../icons/link'
import ProfileIcon from '../icons/profile'
import './TabsTitle.css' 
interface TabsTitleProps {
  children?: React.ReactNode
}

function TabsTitle({ children }: TabsTitleProps) {
  const activePath = usePathname()

  const [onMouseEnter, setOnMouseEnter] = useState<{ id: string; status: boolean }>({ id: '', status: false })
  const id = useTabsItemContext()

  const handleMouseEnter = (fieldId: string) => {
    setOnMouseEnter({ id: fieldId, status: true })
  }

  const handleMouseLeave = (fieldId: string) => {
    setOnMouseEnter({ id: fieldId, status: false })
  }

  return (
    <div
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={() => handleMouseLeave(id)}
      className={`tabs-title ${activePath === id ? 'active' : ''}`}
    >
      <span>
        {id !== '/profile-details' ? (
          <Link
            color={
              activePath === id || (onMouseEnter.id === id && onMouseEnter.status)
                ? '#633CFF'
                : '#737373'
            }
            size={20}
          />
        ) : (
          <ProfileIcon
            color={
              activePath === id || (onMouseEnter.id === id && onMouseEnter.status)
                ? '#633CFF'
                : '#737373'
            }
            size={20}
          />
        )}
      </span>
      {children && <span>{children}</span>}
    </div>
  )
}

export default TabsTitle
