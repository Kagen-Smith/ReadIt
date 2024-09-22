import { UserData } from "./userData";
import { ReviewData } from "./reviewData";

export interface BookData {
    id: number | null;
    title: string | null;
    author: string | null;
    genre: string | null;
    reviews: ReviewData[] | null;
    assignedUserId: number | null;
    assignedUser: UserData | null;
}
