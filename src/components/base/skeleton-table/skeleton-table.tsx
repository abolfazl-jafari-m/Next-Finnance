import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Skeleton} from "@/components/ui/skeleton";

function SkeletonTable() {
        return (
            <div className={"h-[calc(100vh-300px)] w-full p-10"}>
                <Table className="lg:max-w-lg mx-auto">
                    <TableHeader>
                        <TableRow>
                            <TableHead>
                                <Skeleton className="h-7 w-[180px]" />
                            </TableHead>
                            <TableHead>
                                <Skeleton className="h-7 w-[180px]" />
                            </TableHead>
                            <TableHead>
                                <Skeleton className="h-7 w-[180px]" />
                            </TableHead>
                            <TableHead>
                                <Skeleton className="h-7 w-[180px]" />
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {[...Array(5)].map((_, i) => (
                            <TableRow key={i}>
                                <TableCell>
                                    <Skeleton className="h-8 w-[180px]" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-8 w-[180px]" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-8 w-[180px]" />
                                </TableCell>
                                <TableCell>
                                    <Skeleton className="h-8 w-[180px]" />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
}

export default SkeletonTable;