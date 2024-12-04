'use client'
import React, { useState } from 'react'
import styles from "./index.module.scss";
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


interface SearchProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  selectedTag: string
  setSelectedTag: (tag: string) => void
  tags: string[]
}


export function Search({
  searchTerm,
  setSearchTerm,
  selectedTag,
  setSelectedTag,
  tags
}: SearchProps) {

  return (
    <div className={styles.search}>
      <Input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-sm"
      />
      <Select value={selectedTag} onValueChange={setSelectedTag}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a tag"/>
        </SelectTrigger>
        <SelectContent>
          {tags.map((tag) => (
            <SelectItem key={tag} value={tag}>
              {tag}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>

  )
}

export default Search