
export function postsSelector(state) {
  return state.posts || [];
}

export function postsLoadingSelector(state) {
  return state.postLoading || false;
}

export function createdPostsSelector(state) {
  return state.createdPosts || [];
}