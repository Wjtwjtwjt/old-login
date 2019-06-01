import util from '../../util/util'
const user = {
  state:{
    tenantId:"",
    inviteCode:"",
  },
  mutations:{
    SET_TENANT_ID:(state,data) =>{
      state.tenantId = data;
    },
    SET_INVITE_CODE:(state,data) =>{
      state.inviteCode = data;
    },
  },
  actions:{
    // eslint-disable-next-line no-unused-vars
    setTenantId:({dispatch,commit},data)=>{
      commit('SET_TENANT_ID', data);
    },
    // eslint-disable-next-line no-unused-vars
    setInviteCode:({dispatch,commit},data)=>{
      commit('SET_INVITE_CODE', data);
    },
    initStore: ({dispatch}) => {
      dispatch('setTenantId', util.getParam('TENANT_ID'));
      dispatch('setInviteCode', util.getParam('inviteCode'));
    }
  }
}
export default user