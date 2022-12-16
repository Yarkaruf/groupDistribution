print('Hello, world!')

math = input('Колличество учеников в группе: ')
#trying

import json

# JSON = {Id : {name : name, turn1 : subject, turn2 : subject, turn3 : subject}, Id : {name : name, turn1 : subject, turn2 : subject, turn3 : subject}, ...}

# Example

json = {1 : {"name" : "rak", "turn1" : "math", "turn2" : "bio", "turn3" : "CS"}, 2 : {"name" : "kar", "turn1" : "music", "turn2" : "bio", "turn3" : "art"}}

# subjects = (subject1, subject2, ...)
# groups = {subject1 : [name, name, ...], subject2 : [name, name, ...], ...}
# student_lessons = {name : count, name : count, ...}

# Создание лимита размерности группы
def groups_sizes(): 
    countofstudents_math = input('Введите количество учеников в группе математики: ')
    countofgroups_math = input('Введите количество групп математики: ')

    countofstudents_bio = input('Введите количество учеников в группе биологии: ')
    countofgroups_bio = input('Введите количество групп биологии: ')
    
    countofstudents_music = input('Введите количество учеников в группе музыки: ')
    countofgroups_music = input('Введите количество групп музыки: ')
    
    countofstudents_CS = input('Введите количество учеников в группе Computer Science: ')
    countofgroups_CS = input('Введите количество групп Computer Science: ')
    
    countofstudents_art = input('Введите количество учеников в группе изобразительного искусства: ')
    countofgroups_art = input('Введите количество групп изобразительного искусства: ')

# Создание групп
def groups_init(subjects):
	groups = {}
	[groups.update({i : []}) for i in subjects]
	return(groups)

# Создание списка предметов
def subjects_list_init(jsonobj):
	subjects = set()
	for i in jsonobj:
		[subjects.add((jsonobj[i]["turn"+str(j)])) for j in range(1,4)]
	return(subjects)

# Создание счетчика предметов у каждого ученика
def count_of_lessons_list_create(jsonobj):
	student_lessons = {}
	for i in jsonobj:
		if jsonobj[i]["name"] not in student_lessons:
			student_lessons[jsonobj[i]["name"]] = 0
	
	return(student_lessons)

# Создание счетчика групп по предмету
def groups_number_init(jsonobj):
	groups_number = dict()
	for i in jsonobj:
		if jsonobj[i]["turn1"] not in groups_number:
			groups_number.update({jsonobj[i]["turn1"] : 1})
		if jsonobj[i]["turn2"] not in groups_number:
			groups_number.update({jsonobj[i]["turn2"] : 1})
		if jsonobj[i]["turn3"] not in groups_number:
			groups_number.update({jsonobj[i]["turn3"] : 1})

	return(groups_number)

# Заполнение групп учениками и счетчика предметов у каждого ученика
def groups_filling(jsonobj, groups, subjects, student_lessons):
	for i in jsonobj:
		if jsonobj[i]["turn1"] in subjects:
			groups[jsonobj[i]["turn1"]].append(jsonobj[i]["name"])
			student_lessons[jsonobj[i]["name"]] += 1

		if jsonobj[i]["turn2"] in subjects:
			groups[jsonobj[i]["turn2"]].append(jsonobj[i]["name"])
			student_lessons[jsonobj[i]["name"]] += 1
	
	return(groups)

# Проверка размерности групп - создание новых групп
def group_size_check(groups, groups_sizes, groups_number):
	for subject in list(groups):
		temp = []
		while len(groups[subject]) > groups_sizes[subject][0]:
			temp.append(groups[subject][-1])
			groups[subject].pop(-1)
		ex = {}
		if len(temp) % groups_sizes[subject][0] != 0:
			for i in range(len(temp) // groups_sizes[subject][0] + 1):
				ex.update({i : []})
				for student in range(groups_sizes[subject][0]):
					ex[i].append(temp[-1])
					temp.pop(-1)
		else:
			for i in range(len(temp) // groups_sizes[subject][0]):
				ex.update({i : []})
				for student in range(groups_sizes[subject][0]):
					ex[i].append(temp[-1])
					temp.pop(-1)
		for i in ex:
			groups_number[subject] += 1
			groups.update({"subj" : ex[i]})
			groups[subject+str(i+2)] = groups.pop("subj")
	return(groups)

#Проверка количества групп по предмету - если больше нужного, то удаление последней группы и распределение её членов по другим предметам по 3-ему выбору
#groups - группа[ученик,ученик],groups_number - счетчик групп
def group_count_check(groups, groups_number,groups_sizes):
  another = {}
  schetchik = 0
  group = ""
  #проход по группам
  for i in list(groups_number):
    #пока количество груп > макс размера
    while(groups_number[i]>groups_sizes[i][1]):
      #проверка на лишние действия
      if(groups_number[i]>1):
        group=i+str(groups_number[i])
      else: group=i
      if(groups[group]!=None and group in groups.keys()):
        #обход всех учеников
        for j in list(json):
          #обход всех учеников в группе
          for k in range(len(groups[group])):
            #пока совпадении вытаскиваем запасную группу и имя 
            if(json[j]["name"] == groups[group][k]):
              name_group=json[j]["turn3"]
              name=json[j]["name"]
              #Если количество человек в группе + 1 > размера макс или группа пустая
              if(len(groups[name_group])+1<groups_sizes[name_group][0] or groups[name_group]==[]):
                groups[name_group].append(name)
              #Если возможно добавить группу то добавляем
              elif(groups_sizes[name_group][1]>groups_number[name_group]+1):
                groups.update({name_group+str(groups_number[name_group]+1):name})
                groups_number[name_group]+=1
              else:
                 print("Невозможно группа переполнена")
                 another.update({schetchik : name})
                 schetchik+=1
      #Удаление лишней группы, убираем ее из счетчика,  
      groups.pop(group)
      groups_number[i]-=1
  #Возращает группу another id : name те кто выбрал резервную группу но она заполнена
  return another


student_lessons = count_of_lessons_list_create(json)
subjects = subjects_list_init(json)
groups = groups_init(subjects)
groups_number = groups_number_init(json)

print(student_lessons,"\n",groups_filling(json, groups, subjects, student_lessons))
print(groups_number)
print(group_size_check(groups, groups_sizes, groups_number))
print(groups_number)
