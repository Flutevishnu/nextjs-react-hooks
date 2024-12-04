type cate = "general" | "travel" | "music"
export function createConnection(serverUrl:string, roomId: cate) {
    return {
        connect() {
            console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
        },

        disconnect() {
            console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
        }
    }
}