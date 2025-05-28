"use client";

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components"
import { SearchBarProps } from "./SearchBar.types"


const StyledInput = styled.input`
  padding: 15px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 70%;
  margin-left: 15%;
  margin-right: 15%;

  &:focus {
    border-color: #0070f3;
  }
`;

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search here...",
  onSearch,
  debounceDelay = 300,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState(inputValue);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, debounceDelay);

    return () => clearTimeout(timer);
  }, [inputValue, debounceDelay]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  return (
    <StyledInput
      type="text"
      value={inputValue}
      placeholder={placeholder}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};