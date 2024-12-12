import SearchComponent from "./_components/searchInput"
export default function Page() {
    return(
        <div className="min-h-full flex items-center justify-center">
            <div className="border p-4">
                <SearchComponent></SearchComponent>
            </div>
        </div>
    )
}