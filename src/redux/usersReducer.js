const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
  users: [
    /*   {
      id: 123123,
      fullName: 'Alex',
      status: 'Hello ',
      location: { city: 'Moscow', country: 'Russia' },
      follwed: true,
    },
    {
      id: 123122,
      fullName: 'Helen',
      status: 'HI!',
      location: { city: 'Moscow', country: 'Russia' },
      follwed: true,
    },
    {
      id: 123122,
      fullName: 'Andrew',
      status: 'Chewi!',
      location: { city: 'Moscow', country: 'Russia' },
      follwed: true,
    },
    {
      id: 123122,
      fullName: 'Mixa',
      status: 'YO',
      location: { city: 'Bryansk', country: 'Russia' },
      follwed: false,
    }, */
  ],
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      }
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.id ? { ...u, follwed: true } : u
        ),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.id ? { ...u, follwed: false } : u
        ),
      }
    default:
      return state
  }
}

export const followAC = (id) => {
  return {
    type: FOLLOW,
    id,
  }
}
export const unfollowAC = (id) => {
  return {
    type: UNFOLLOW,
    id,
  }
}
export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users,
  }
}
