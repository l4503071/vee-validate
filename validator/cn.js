export default {
	messages:{ 
		required:(field)=>`${field}是必须.`,
		email:(field)=>`${field}邮箱错误.`,
		truthy:()=>'必须包含a'
	},
	attributes:{
		email: '邮箱'
	}
}