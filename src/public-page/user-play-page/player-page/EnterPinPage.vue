<script setup lang="ts">
import TheLanguageSelector from "@/components/single-instance-components/public-component/TheLanguageSelector.vue";
import { Packet, ReqJoinRoom } from "@/proto/Proto";
import router from "@/router";
import { showWarningAlert } from "@/service/Alert";
import { WS } from "@/socket/WS";
import { ref } from "vue";

const removePlacehoder = (event: FocusEvent) => {
  (event.target as HTMLInputElement).placeholder = '';

}
const pinRoom = ref('');



const sendJoinRoomRequest = (event: Event) => {
  event.preventDefault();
  const roomId = Number(pinRoom.value);
  let reqJoinRoom = ReqJoinRoom.create();
  reqJoinRoom.roomId = roomId;
  let packet = Packet.create();
  packet.data = { oneofKind: 'reqJoinRoom', reqJoinRoom: reqJoinRoom };
  console.log("sent join room to server");
  sessionStorage.setItem('roomId', JSON.stringify(roomId));
  WS.send(packet);

 
}
</script>

<template >
  <div class=" waiting-wrapper ">
    <div class="header">
      <div class="language-select absolute right-2 border-2 rounded-3xl ">
        <TheLanguageSelector/>
      </div>
    </div>
    <main class="main-content ">
      <div class="content ">
        <div class="logo w-full">
          <img class="max-w-[18rem] h-auto object-center bg-transparent " src="../components/image/logo.png" alt="logo">
        </div>
        <div class="form-enter   ">
          <form class="form flex flex-col w-[20rem] h-[3rem] bg-transparent content-center">
            <div class="input-code ">
              <input class="input-field" type="text"
                      v-model="pinRoom"
                  aria-label="Game pin"
                     placeholder="Game pin"
                     @focus="removePlacehoder">
              <button class="enter-code"
                      type="submit"
                      aria-label="Enter"
                      @click="sendJoinRoomRequest($event)">
                     Enter
              </button>
            </div>
          </form>
        </div>
      </div>

    </main>
    <div class="setting-option">

    </div>
  </div>
</template>

<style scoped>
.waiting-wrapper {
  @apply w-full h-full m-0 p-0  flex flex-col bg-[url('../components/image/background.jpg')] bg-cover bg-center bg-no-repeat overflow-x-hidden overflow-y-auto;
}

.header {
  @apply flex w-full h-1/6 p-2 ;
}

/* For screens smaller than 600px */
@media (max-width: 600px) {
  .header {
    @apply h-[2rem];
  }
}

/* For screens between 600px and 900px */
@media (min-width: 600px) and (max-width: 900px) {
  .header {
    @apply h-[3rem];
  }
}

/* For screens larger than 900px */
@media (min-width: 900px) {
  .header {
    @apply h-[4rem];
  }
}

.main-content {
  @apply w-full h-full my-0 ;
}

.main-content .content {
  @apply w-full h-full flex flex-col items-center mx-auto p-0 bg-transparent;
}

.form-enter {
  @apply flex flex-col items-center justify-center;
}
.input-code {
  @apply flex flex-col items-center justify-center  w-auto h-auto  border-2 border-black  bg-white p-3.5 ;
}
.input-field{
  @apply w-[18rem] h-[3rem] border-2 border-gray-400 mb-2 text-center font-bold text-lg
}
.logo {
  @apply flex justify-center;
}
.enter-code {
  @apply w-[18rem] h-[3rem] border-2 border-black bg-gray-700 text-white font-bold text-lg ;
}
</style>