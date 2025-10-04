"use client";
import React from "react";
import Link from "next/link";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    baseUrl: string;
    searchParams?: Record<string, string>;
}

export default function Pagination({
    currentPage,
    totalPages,
    baseUrl,
    searchParams = {},
}: PaginationProps) {
    // Don't render pagination if there's only one page or no pages
    if (totalPages <= 1) {
        return null;
    }

    const getPageUrl = (page: number) => {
        const params = new URLSearchParams({
            ...searchParams,
            page: page.toString(),
        });
        return `${baseUrl}?${params.toString()}`;
    };

    const renderPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        let startPage = Math.max(
            1,
            currentPage - Math.floor(maxVisiblePages / 2)
        );
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        // Adjust start page if we're near the end
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        // Previous button
        pages.push(
            <li key='prev' className='page-item'>
                {currentPage > 1 ? (
                    <Link
                        href={getPageUrl(currentPage - 1)}
                        className='page-link'
                        aria-label='Previous'
                    >
                        <i className='fas fa-angle-left'></i>
                    </Link>
                ) : (
                    <span className='page-link disabled' aria-label='Previous'>
                        <i className='fas fa-angle-left'></i>
                    </span>
                )}
            </li>
        );

        // First page and ellipsis
        if (startPage > 1) {
            pages.push(
                <li key={1} className='page-item'>
                    <Link href={getPageUrl(1)} className='page-link'>
                        1
                    </Link>
                </li>
            );
            if (startPage > 2) {
                pages.push(
                    <li key='ellipsis1' className='page-item disabled'>
                        <span className='page-link'>...</span>
                    </li>
                );
            }
        }

        // Page numbers
        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <li
                    key={i}
                    className={`page-item ${i === currentPage ? "active" : ""}`}
                >
                    {i === currentPage ? (
                        <span className='page-link'>{i}</span>
                    ) : (
                        <Link href={getPageUrl(i)} className='page-link'>
                            {i}
                        </Link>
                    )}
                </li>
            );
        }

        // Last page and ellipsis
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pages.push(
                    <li key='ellipsis2' className='page-item disabled'>
                        <span className='page-link'>...</span>
                    </li>
                );
            }
            pages.push(
                <li key={totalPages} className='page-item'>
                    <Link href={getPageUrl(totalPages)} className='page-link'>
                        {totalPages}
                    </Link>
                </li>
            );
        }

        // Next button
        pages.push(
            <li key='next' className='page-item'>
                {currentPage < totalPages ? (
                    <Link
                        href={getPageUrl(currentPage + 1)}
                        className='page-link'
                        aria-label='Next'
                    >
                        <i className='fas fa-angle-right'></i>
                    </Link>
                ) : (
                    <span className='page-link disabled' aria-label='Next'>
                        <i className='fas fa-angle-right'></i>
                    </span>
                )}
            </li>
        );

        return pages;
    };

    return (
        <div className='pagination-wrapper'>
            <nav aria-label='Pagination'>
                <ul className='pagination justify-content-center'>
                    {renderPageNumbers()}
                </ul>
            </nav>
        </div>
    );
}
