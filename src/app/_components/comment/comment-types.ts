import {ComponentBase} from "@/app/_components/types/component-base.type";
import {Comment} from "@/types/comment.interface";

export type CommentProps = Omit<ComponentBase, 'isDisabled' | 'size'> & Comment