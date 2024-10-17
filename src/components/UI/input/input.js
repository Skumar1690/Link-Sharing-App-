import Image from 'next/image'
import './Input.css'  CSS file

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'password'
  id: string
  name: string
  title: string
  placeholder?: string
  error?: any
  errorMessage?: string
  hasIcon?: boolean
  profile?: boolean
}

function Input({
  type = 'text',
  id,
  name,
  title,
  placeholder,
  error,
  errorMessage,
  hasIcon = true,
  profile = false,
  ...rest
}: InputProps) {
  if (!id) {
    throw new Error('Input component must have an id prop')
  } else if (!title) {
    throw new Error('Input component must have a title prop')
  } else if (!name) {
    throw new Error('Input component must have a name prop')
  }

  const uniqueId = `${id}-${name}`

  return (
    <div className={`input-container ${profile ? 'md:flex md:items-center md:justify-between' : ''}`}>
      <label htmlFor={uniqueId} className={`input-label ${profile ? 'profile' : ''}`}>
        {title}
      </label>
      <div className={`input-wrapper ${profile ? 'md:w-7/12' : ''}`}>
        <input
          className={`input-field ${hasIcon ? 'has-icon' : ''} ${error ? 'error' : ''} ${
            error ? 'hover:shadow-none' : ''
          }`}
          type={type}
          name={title === 'Link' ? `${name}-link` : name}
          id={uniqueId}
          placeholder={placeholder}
          {...rest}
        />
        {hasIcon && (
          <span className="input-icon">
            {title === 'Link' ? (
              <Image
                src={`/images/icon-link.svg`}
                alt={title}
                width={16}
                height={16}
              />
            ) : (
              <Image
                src={`/images/icon-${id === 'confirm-password' ? 'password' : id}.svg`}
                alt={title}
                width={16}
                height={16}
              />
            )}
          </span>
        )}
        {error && (
          <span className="error-message">
            {errorMessage}
          </span>
        )}
      </div>
    </div>
  )
}

export default Input
