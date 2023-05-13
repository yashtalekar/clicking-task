import pandas as pd
import json


def read_csv(file_name):
    df = pd.read_csv(file_name)
    return df


def shuffle(df):
    df = df.sample(frac=1)
    return df


def generate_json(df):
    json_data = []
    for index, row in df.iterrows():
        json_data.append(json.dumps(row.to_dict()))
    return json_data


def main():
    df = read_csv('politifact_sub.csv')

    # group by party
    rep_df = df[df['party'] == 'REP']
    dem_df = df[df['party'] == 'DEM']

    # shuffle the data
    rep_df = shuffle(rep_df)
    dem_df = shuffle(dem_df)

    new_df = pd.DataFrame(columns=['order', 'statement_1', 'statement_2',
                          'statement_3', 'statement_4', 'statement_5', 'statement_6'])

    # loop through the data with a step of 3 (3 rep, 3 dem)
    for step_index in range(0, len(rep_df), 3):
        # loop through this step 6 times
        step_row = []
        # if step_index divisible by 6, then it is a new order
        if step_index % 6 == 0:
            step_row.append(json.dumps(
                ['demographics', 'voting', 'misinformation']))
        else:
            step_row.append(json.dumps(
                ['demographics', 'misinformation', 'voting']))
        # 3 rep
        for current_step_index in range(0, 3):
            index = step_index + current_step_index
            json_data = generate_json(rep_df.iloc[index:index+1])[0]
            step_row.append(json_data)

        # 3 dem
        for current_step_index in range(0, 3):
            index = step_index + current_step_index
            json_data = generate_json(dem_df.iloc[index:index+1])[0]
            step_row.append(json_data)
        new_df.loc[len(new_df)] = step_row

    # populate data into new csv
    new_df.to_csv('politifact_data_pilot.csv', index=False)


if __name__ == '__main__':
    main()
