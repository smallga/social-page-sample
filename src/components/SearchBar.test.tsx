import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent, logDOM, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from './SearchBar';

describe('seachBar', () => {
  const searchFun = vi.fn();
  const handleOnBlur = vi.fn();
  const handleOnFocus = vi.fn();

  beforeEach(() => {
    render(<SearchBar onSearch={searchFun} onBlur={handleOnBlur} onFocus={handleOnFocus} showCancle={true} />);
    
  })

  it('search bar trigger searchFunction', () => {
    let searchInput = screen.getByLabelText('search-input', {selector: 'input'});
    fireEvent.change(searchInput, {target: {value: 'lisa'}});
    expect(searchFun).toHaveBeenCalled();
  })  
  it('search bar trigger onFocusFunction',() => {
    let searchInput = screen.getByLabelText('search-input', {selector: 'input'});
    expect(screen.queryAllByLabelText('search-cancle')).toStrictEqual([]);
    searchInput.focus();
    expect(handleOnFocus).toHaveBeenCalled();
  })  

  it('search bar trigger onBlurFunction', async () => {
    let searchInput = screen.getByLabelText('search-input', {selector: 'input'});
    //check cancle button visibility before focus search input
    expect(screen.queryAllByLabelText('search-cancle')).toStrictEqual([]);
    searchInput.focus();
    //check cancle button showed after focus search input
    await screen.findByLabelText("search-cancle");
    let cancleBtn = screen.getByLabelText("search-cancle");
    cancleBtn.click();
    expect(handleOnBlur).toHaveBeenCalled();
  })  
});