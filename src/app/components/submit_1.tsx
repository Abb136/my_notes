'use client'

import {handelNote} from "../lib/mutations";

export default function Submit_1({}:{Note?:string}) {
  return (
    <div className="relative w-full max-w-md mx-auto mt-6 p-4 border rounded-xl shadow-sm max-h-96">
      <form action={handelNote}>
        <textarea data-slot="textarea"
        name="firstNote"
        className="border-input placeholder:text-muted-foreground 
        focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 
        dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 
        flex field-sizing-content w-full rounded-md border bg-transparent px-3 py-2 text-base 
        shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed 
        disabled:opacity-50 md:text-sm min-h-[100px] pl-8" placeholder="Write your note here...">
        </textarea>
        <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap 
          rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 
          [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 
          outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 
          dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs 
          hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3 mt-3 w-full" type="submit" name="action" value='add'>
          Submit
        </button>
      </form>
    </div>
    )
}