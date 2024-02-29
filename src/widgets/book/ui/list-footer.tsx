import { BooksListFooter } from 'entities/book/ui/book-footer';
import { NavigateToBookAddButton } from 'features/book-add/ui/nav-button';


export const BooksFooterWidget = () => {
  return <BooksListFooter actionItem={<NavigateToBookAddButton />} />;
};
