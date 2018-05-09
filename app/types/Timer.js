type Timing = {|
  startedAt: number,
  stoppedAt: number,
  baseTime: number,
  paused: boolean
|};

// @flow
export type Timer = {
  name: string | null,
  time: number,
  id: string,
  timing: Timing
};

export type ModTimer = {
  // $FlowIssue
  name?: string | null,
  time?: number,
  id?: string,
  timing?: Timing
};

export type DbTimer = {
  name: string,
  id: string,
  elapsed: number
};
