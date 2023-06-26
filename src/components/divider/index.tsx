import { IPropsDivider } from "./interfaces/IPropsDivider"
import { DividerContainer } from "./style"

const Divider = ({ $height, $width, $bgColor, $widthResponsiveness }: IPropsDivider) => {
    return (
        <DividerContainer $height={$height} $width={$width} $bgColor={$bgColor} $widthResponsiveness={$widthResponsiveness} />
    )
}

export default Divider