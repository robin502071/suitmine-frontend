import React from 'react';
import LastPageBgc from '../../images/register/1200x675_cmsv2_7231199b-0615-5f96-b27d-5592c25881cc-3115386.png';

function LastPageSubmit(props) {
  const { fields, handleFieldChange } = props;
  return (
    <>
      <div className=" submitPage position-relative">
        <div className="submitPageImgBox">
          <img src={LastPageBgc} alt="" />
          <div className="position-absolute top-50 start-50 translate-middle">
            <div className="registerInputBox d-flex flex-column justify-content-center ">
              <div className="mx-auto pb-5">
                <p className="h3">請再次確認測量資訊</p>
              </div>
              <div
                action=""
                className=" mx-auto d-flex flex-column justify-content-center"
              >
                <div class="mb-3 mx-1">
                  <label for="exampleFormControlInput1" class="form-label">
                    身高
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    value={fields.height}
                    name="height"
                    placeholder="請輸入身高"
                    onChange={handleFieldChange}
                  ></input>
                </div>
                <div class="mb-3 mx-1">
                  <label for="exampleFormControlInput1" class="form-label">
                    體重
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    value={fields.weight}
                    name="weight"
                    placeholder="請輸入體重"
                    onChange={handleFieldChange}
                  ></input>
                </div>
                <div class="mb-3 mx-1">
                  <label for="exampleFormControlInput1" class="form-label">
                    肩寬
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    value={fields.shoulder_width}
                    name="shoulder_width"
                    placeholder="請輸入肩寬"
                    onChange={handleFieldChange}
                  ></input>
                </div>
                <div class="mb-3 mx-1">
                  <label for="exampleFormControlInput1" class="form-label">
                    胸圍
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    value={fields.chest}
                    name="chest"
                    placeholder="請輸入胸圍"
                    onChange={handleFieldChange}
                  ></input>
                </div>
                <div class="mb-3 mx-1">
                  <label for="exampleFormControlInput1" class="form-label">
                    臂長
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    value={fields.arm_length}
                    name="arm_length"
                    placeholder="請輸入臂長"
                    onChange={handleFieldChange}
                  ></input>
                </div>
                <div class="mb-3 mx-1">
                  <label for="exampleFormControlInput1" class="form-label">
                    腰圍
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    value={fields.waist}
                    name="waist"
                    placeholder="請輸入腰圍"
                    onChange={handleFieldChange}
                  ></input>
                </div>
                <div class="mb-3 mx-1">
                  <label for="exampleFormControlInput1" class="form-label">
                    腿長
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    value={fields.leg_length}
                    name="leg_length"
                    placeholder="請輸入腿長"
                    onChange={handleFieldChange}
                  ></input>
                </div>
                <div type="submit" className="btn registerBtn mx-auto mt-3">
                  <p>送出</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LastPageSubmit;
