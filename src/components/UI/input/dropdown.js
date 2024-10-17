'use client'

import React, { useEffect, useState } from 'react'
import allMenuList from '@/lib/all-menu-list'
import Image from 'next/image'
import './Dropdown.css' 

// types for the menu item
interface MenuItem {
  name: string
  icon: React.ReactElement
}

// types for the Dropdown component props
interface DropdownProps {
  name: string
  onChange: (value: string) => void
  onClick?: () => void
  value?: string
  error?: boolean
  errorMessage?: string
}

const Dropdown: React.FC<DropdownProps> = ({
  name,
  onChange,
  onClick,
  value,
  error,
  errorMessage,
}) => {
  if (!name) {
    throw new Error('Name is required for Dropdown component')
  } else if (!onChange) {
    throw new Error('onChange is required for Dropdown component')
  }

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [onMouseEnter, setOnMouseEnter] = useState<{ name: string; status: boolean }>({ name: '', status: false })
  const [selectedValue, setSelectedValue] = useState<MenuItem | null>(null)
  const [hiddenInputValue, setHiddenInputValue] = useState('')

  // Toggle dropdown open/close
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev)
  }

  // Handle mouse enter and leave
  const handleMouseEnter = (fieldName: string) => {
    setOnMouseEnter({ name: fieldName, status: true })
  }

  const handleMouseLeave = () => {
    setOnMouseEnter({ name: '', status: false })
  }

  // Handle selected value change
  const handleSelectedValue = (menuItem: MenuItem) => {
    setSelectedValue(menuItem)
    setHiddenInputValue(menuItem.name)
    onChange(menuItem.name)
  }

  useEffect(() => {
    if (value) {
      const menuItem = allMenuList.find((item) => item.name === value) || null
      setSelectedValue(menuItem)
      setHiddenInputValue(menuItem ? menuItem.name : '')
    }
  }, [value])

  return (
    <div className="dropdown-container">
      <input
        type="hidden"
        placeholder="Select a platform"
        name={'platform-' + name}
        value={hiddenInputValue}
        className="dropdown-input"
      />
      <label htmlFor={'platform-' + name} className="dropdown-label">
        Platform
      </label>
      <div
        className={`dropdown-button ${dropdownOpen ? 'open' : ''} ${error ? 'border-error' : ''}`}
        onClick={toggleDropdown}
      >
        <div className="flex items-center justify-center gap-3">
          <span>
            {!selectedValue?.icon ? (
              <Image
                src={`/images/icon-link.svg`}
                alt={'Link icon'}
                width={16}
                height={16}
              />
            ) : (
              selectedValue.icon
            )}
          </span>
          {error ? (
            <span className="error-message">{errorMessage}</span>
          ) : (
            <span className={`neutral ${selectedValue ? '' : 'text-neutral-dark-grey'}`}>
              {selectedValue?.name || 'Select an option'}
            </span>
          )}
        </div>
        <span
          className={`transition-all duration-300 ease-in-out ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}
        >
          <Image
            src={`/images/icon-chevron-down.svg`}
            alt={'Dropdown icon'}
            width={14}
            height={14}
          />
        </span>
      </div>

      {dropdownOpen && (
        <ul className="dropdown-list">
          {allMenuList.map((item, index, arr) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                handleSelectedValue(item)
                toggleDropdown()
                onClick && onClick()
              }}
              className={`dropdown-item`}
            >
              <span className="icon">
                {React.cloneElement(item.icon, {
                  color: (onMouseEnter.name === item.name && onMouseEnter.status) || selectedValue?.name === item.name ? '#633CFF' : '#737373',
                  size: 16,
                })}
              </span>
              <span className={`transition-colors duration-300 ease-in-out ${onMouseEnter.name === item.name && onMouseEnter.status ? 'selected' : 'neutral'}`}>
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
