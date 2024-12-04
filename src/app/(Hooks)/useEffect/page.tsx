import MainChatRoom from "./_components/ChatRoom";

export default function Page() {
    return(
        <>
        <div className="border min-h-full flex justify-center items-center">
            <div className="border p-10 rounded-lg">
                <MainChatRoom/>
            </div>
            
        </div>
        </>
    )
}