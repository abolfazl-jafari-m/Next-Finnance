"use client";
import React, {ReactNode, useState} from 'react';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

function ReactQueryClientProvider({children}: { children: ReactNode }) {
    const [queryClient] = useState(() =>
        new QueryClient({
            defaultOptions: {
                queries: {
                    staleTime: 60 * 1000,
                }
            }
        }))
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}

export default ReactQueryClientProvider;