<template>
	<view>
		
	</view>
</template>

<script>
	let web3 = require('solana-api-js')
	console.log(888)
	export default {
		data() {
			return {
				
			}
		},
		onShow(){
			this.mnemonicToAcc()
		},
		methods: {
			//从助记词生成账户
			async mnemonicToAcc(){
				//let blockHash = await this.getBlockHash()
				//cook casino sustain find dad spirit view wool fashion escape engine mind
				//gospel sing garlic broken badge trick prosper salon horn skate diamond find
				let mnemonic = 'cook casino sustain find dad spirit view wool fashion escape engine mind'
				let path = "m/44'/501'/0'" 
				let keypair = web3.Transfer.mnemonicToKeypair(mnemonic,path)
				console.log(keypair)
				uni.setStorageSync('keypair',keypair)//存到内存当中
				let toAddress = '4n7DfnFeahc8h78VPaZ3SJhJtfrQoaawK5Qa9P6NTFxF'
				let TOKEN_ADDRESS = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'
				console.log(blockHash)
				
				//var a = await this.$store.state.transfer(blockHash,keypair,toAddress,TOKEN_ADDRESS,100000)
				console.log(a)
			}
		}
	}
</script>

<style>

</style>
