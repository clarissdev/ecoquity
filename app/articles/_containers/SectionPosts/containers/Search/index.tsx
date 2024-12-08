import React from 'react'
import styles from "./index.module.scss";

type Props = {
    searchTerm: string
    onChangeSearchTerm: (value: string) => void
    selectedTag: string
    onChangeSelectedTag: (value: string) => void
    tags: string[]
}

const Search = ({ searchTerm, onChangeSearchTerm, selectedTag, onChangeSelectedTag, tags }: Props) => {
  return (
    <div className={styles.container}>
        <div className={styles.searchBar}>
            <input 
                type="search"
                placeholder='Search posts...'
                className={styles.searchInput}
                value={searchTerm}
                onChange={(e) => onChangeSearchTerm(e.target.value)}
            />
        </div>
        <div className={styles.category}>
            <select 
                value={selectedTag}
                onChange={(e) => onChangeSelectedTag(e.target.value)}
                className={styles.selectDropdown}
            >
                <option value="">All tags</option>
                {tags.map((tag) => (
                    <option key={tag} value={tag}>{tag}</option>
                ))}
            </select>
            <div className={styles.icon}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
  </div>
  )
}

export default Search