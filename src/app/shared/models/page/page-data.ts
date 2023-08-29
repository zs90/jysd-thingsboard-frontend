///
/// Copyright © 2016-2023 The Jysd Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

export interface PageData<T> {
  data: Array<T>;
  totalPages: number;
  totalElements: number;
  hasNext: boolean;
}

export function emptyPageData<T>(): PageData<T> {
  return {
    data: [],
    totalPages: 0,
    totalElements: 0,
    hasNext: false
  } as PageData<T>;
}