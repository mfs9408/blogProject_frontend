import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { useSelector } from '../../store';
import { metaActions } from '../../store/meta';

type Returns = [boolean, (newState: boolean) => void];

export const useIsSideBarOpen = (): Returns => {
  const isSideBarOpen = useSelector((state) => state.metaData.isSideBarOpen);
  const dispatch = useDispatch();
  const setIsSideBarOpen = useCallback(
    (newState: boolean) => {
      dispatch(metaActions.setIsSideBarOpen(newState));
    },
    [dispatch]
  );

  return [isSideBarOpen, setIsSideBarOpen];
};
