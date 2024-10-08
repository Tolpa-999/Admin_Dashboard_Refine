import React from 'react'
import CustomAvatar from './custom-avatar'
import { Text } from './text'
type Props = {
    name: string,
    avatarUrl: string | undefined,
    shape: 'circle' | 'square'
}

const SelectOptionsWithAvatar = ({ avatarUrl, name, shape }: Props) => {
    return (
        <div
            style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
        >
            <CustomAvatar shape={shape} name={name} src={avatarUrl} />
            <Text>{name}</Text>
        </div>
    )
}

export default SelectOptionsWithAvatar