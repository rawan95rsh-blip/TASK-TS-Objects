import { Book } from "./objects";

export interface Review {
  reviewer: string;
  comment: string;
}

export interface ReviewedBook extends Book {
  reviews?: Review[];
}

export function addReview(
  book: ReviewedBook,
  reviewer: string,
  comment: string
): ReviewedBook {
  const newReview: Review = {
    reviewer,
    comment,
  };

  if (!book.reviews) {
    book.reviews = [];
  }

  book.reviews.push(newReview);

  return book;
}

