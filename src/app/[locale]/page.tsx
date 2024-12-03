'use client';

import SwitchLogin from "@/app/[locale]/(pages)/switch/page";
import type { RootState } from "@/stores/store";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "@/features/counter/counterSlice";

export default function Home() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

  return (
      <main>
          <SwitchLogin>
          </SwitchLogin>
      </main>
  );
}
