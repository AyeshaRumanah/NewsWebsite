import { render, screen } from '@testing-library/react';
import NewsList from '../components/NewsList';
test('renders articles',()=>{
    
render(<NewsList articles={[{title:'A'},{title:'B'}]}/>);
expect(screen.getByText('A')).toBeInTheDocument();});