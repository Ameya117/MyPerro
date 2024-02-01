import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

//TODO
const Dropdown = () => {
    return (
        <>           
            <div className="bg-[#C3C3C3] flex justify-end pr-4 lg:h-12">
                <DropdownMenu>
                    <div className="mx-4 font-bold text-sm my-auto md:text-2xl">
                        <DropdownMenuTrigger>Services <i className="fa-solid fa-chevron-down"></i></DropdownMenuTrigger>
                    </div>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>MyPerro Services</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Dog Walking</DropdownMenuItem>
                        <DropdownMenuItem>Dog Boarding</DropdownMenuItem>
                        <DropdownMenuItem>Dog Games</DropdownMenuItem>
                        <DropdownMenuItem>Dog Washing</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <div className="mr-2 font-bold text-sm my-auto md:text-2xl">
                        <DropdownMenuTrigger>Reviews <i className="fa-solid fa-chevron-down"></i></DropdownMenuTrigger>
                    </div>
                    <DropdownMenuContent>
                        <DropdownMenuItem>review 1</DropdownMenuItem>
                        <DropdownMenuItem>review 2</DropdownMenuItem>
                        <DropdownMenuItem>review 3</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    )
}

export default Dropdown
