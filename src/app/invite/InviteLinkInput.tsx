'use client'

import { IconButton } from '@/components/IconButton'
import { InputRoot, InputIcon, InputField } from '@/components/Input'
import { Link, Copy } from 'lucide-react'

interface InviteLinkInputProps {
  inviteLink: string
}

export default function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyIniviteLink() {
    navigator.clipboard.writeText(inviteLink)
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField readOnly defaultValue={inviteLink} />
      <IconButton className="-mr-2" onClick={copyIniviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
