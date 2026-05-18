import { colors, radii, spacing } from '../../../branding/brand-tokens'

export function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: colors.primary,
        color: colors.text,
        padding: spacing.md,
        borderRadius: radii.md,
        border: 'none',
        cursor: 'pointer'
      }}
    >
      {children}
    </button>
  )
}
